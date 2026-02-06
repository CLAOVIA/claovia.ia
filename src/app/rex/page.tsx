import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Retour d'Experience | Claovia",
    description:
        "Faites votre retour d'experience avec Clao, votre assistant REX intelligent.",
};

export default function RexPage() {
    return (
        <main className="fixed inset-0 w-full h-full">
            <iframe
                src="https://typebot.co/claude-xp-c34pbgf"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                title="Clao - Retour d'Experience"
            />
        </main>
    );
}
