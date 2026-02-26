import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useSearch } from "@/heroes/hooks/useSearch";

export const SearchPage = () => {
  const { data: heroes } = useSearch();

  if (!heroes) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <CustomJumbotron
        title="Superheroes Search"
        description="Discover, explore and manage superheroes and villians"
      />

      <CustomBreadcrumbs currentPage="Search Heroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
