import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Nuera the Brainy Explorer"
          subject="science"
          topic="Neural Networks of the Brain"
          duration={45}
          color="#ffda6e"
          bookmarked={false}
        />

        <CompanionCard
          id="999"
          name="Countsy the Math Wizard"
          subject="math"
          topic="Advanced Calculus"
          duration={30}
          color="#e5d0ff"
          bookmarked={true}
        />

        <CompanionCard
          id="011"
          name="Artie the Creative Artist"
          subject="art"
          topic="Modern Art Techniques"
          duration={60}
          color="#ffb3b3"
          bookmarked={false}
        />
      </section>

      <section className="home-section">
        <CompanionList />
        <CTA />
      </section>
    </main>
  );
}
