import PanelShell from "./PanelShell";
import AuthGuard from "@/guards/AuthGuard";
export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <PanelShell>{children}</PanelShell>
    </AuthGuard>
  );
}
