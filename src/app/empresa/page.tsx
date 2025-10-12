import HeroEnterprise from "../components/HeroEnterprise";
import Contact from "../sections/Contact";
import EnterpriseContent from "../sections/EnterpriseContent";


export default function EnterprisePage() {
  return (
    <main className="bg-background min-h-screen">
      <HeroEnterprise />
      <EnterpriseContent />
      <Contact />
    </main>
  );
}
