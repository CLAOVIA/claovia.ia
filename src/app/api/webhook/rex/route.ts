import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_SECRET = process.env.TYPEBOT_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
    try {
        // Verify webhook secret
        const authHeader = request.headers.get('x-webhook-secret') || request.headers.get('authorization');
        if (WEBHOOK_SECRET && authHeader !== WEBHOOK_SECRET && authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        // Log only non-sensitive metadata (no PII)
        // eslint-disable-next-line no-console
        console.log('Webhook REX reçu:', {
            timestamp: new Date().toISOString(),
            hasPayload: !!body,
            keys: Object.keys(body),
        });

        return NextResponse.json({
            success: true,
            message: 'Webhook reçu',
            timestamp: new Date().toISOString(),
        });

    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erreur webhook REX');
        return NextResponse.json(
            { error: 'Erreur lors du traitement' },
            { status: 500 }
        );
    }
}

// Health check GET
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Webhook REX actif',
        timestamp: new Date().toISOString(),
    });
}
