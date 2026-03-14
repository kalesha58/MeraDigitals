import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';

export const metadata = {
  title: 'Insights | Mera Digital - Strategic Thought Leadership',
  description: 'Explore expert perspectives on SEO, UI/UX, Performance Marketing, and the future of digital ecosystems.',
};

export default function BlogListingPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
