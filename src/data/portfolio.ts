export type VideoCategory = "all" | "fashion" | "advertising";

export interface VideoItem {
  id: string;
  title: string;
  category: Exclude<VideoCategory, "all">;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: "16/9" | "9/16";
  span?: "col-span-1" | "col-span-2";
}

const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}`;

export const categories: { key: VideoCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "fashion", label: "Fashion" },
  { key: "advertising", label: "Advertising" },
];

// Hero / Showreel video ID
export const showreelVideoId = "_i6qN-Gjgws";

// Ordered items — first two are pinned at top in "all" view
const orderedItems: VideoItem[] = [
  // 1. Showreel (pinned #1)
  { id: "hero", title: "Showreel", category: "fashion", thumbnail: ytThumb("_i6qN-Gjgws"), videoUrl: ytEmbed("_i6qN-Gjgws"), aspectRatio: "16/9", span: "col-span-2" },
  // 2. Advertising Highlight (pinned #2)
  { id: "ad-highlight", title: "Ad Highlight", category: "advertising", thumbnail: ytThumb("2PD6Civkw74"), videoUrl: ytEmbed("2PD6Civkw74"), aspectRatio: "16/9", span: "col-span-2" },

  // Fashion
  { id: "f1", title: "Fashion Film", category: "fashion", thumbnail: ytThumb("T-dU5URMAaI"), videoUrl: ytEmbed("T-dU5URMAaI"), aspectRatio: "9/16" },
  { id: "f2", title: "Runway Edit", category: "fashion", thumbnail: ytThumb("zZo169XRVhI"), videoUrl: ytEmbed("zZo169XRVhI"), aspectRatio: "9/16" },
  { id: "f3", title: "Style Reel", category: "fashion", thumbnail: ytThumb("AHNuWiz2POg"), videoUrl: ytEmbed("AHNuWiz2POg"), aspectRatio: "9/16" },
  { id: "f4", title: "Lookbook", category: "fashion", thumbnail: ytThumb("85VjXnLEO70"), videoUrl: ytEmbed("85VjXnLEO70"), aspectRatio: "9/16" },
  { id: "f5", title: "Editorial", category: "fashion", thumbnail: ytThumb("Ad3aTp3ZamU"), videoUrl: ytEmbed("Ad3aTp3ZamU"), aspectRatio: "9/16" },
  { id: "f6", title: "Campaign", category: "fashion", thumbnail: ytThumb("5UN_5D4kOos"), videoUrl: ytEmbed("5UN_5D4kOos"), aspectRatio: "9/16" },
  { id: "f7", title: "Collection", category: "fashion", thumbnail: ytThumb("qk3x_iCZURk"), videoUrl: ytEmbed("qk3x_iCZURk"), aspectRatio: "9/16" },
  { id: "f8", title: "Atelier", category: "fashion", thumbnail: ytThumb("Vp9jBp__bMs"), videoUrl: ytEmbed("Vp9jBp__bMs"), aspectRatio: "9/16" },
  { id: "f9", title: "Couture", category: "fashion", thumbnail: ytThumb("-oX8OQpFt-Q"), videoUrl: ytEmbed("-oX8OQpFt-Q"), aspectRatio: "16/9", span: "col-span-2" },

  // Advertising
  { id: "a1", title: "Brand Spot", category: "advertising", thumbnail: ytThumb("vqgYgNKArTk"), videoUrl: ytEmbed("vqgYgNKArTk"), aspectRatio: "16/9", span: "col-span-2" },
  { id: "a2", title: "Product Promo", category: "advertising", thumbnail: ytThumb("jcvqpP3KEeM"), videoUrl: ytEmbed("jcvqpP3KEeM"), aspectRatio: "9/16" },
  { id: "a3", title: "Social Ad", category: "advertising", thumbnail: ytThumb("IrVSFw5BQkM"), videoUrl: ytEmbed("IrVSFw5BQkM"), aspectRatio: "9/16" },
  { id: "a4", title: "Launch Clip", category: "advertising", thumbnail: ytThumb("pBChaCNJQe8"), videoUrl: ytEmbed("pBChaCNJQe8"), aspectRatio: "9/16" },
  { id: "a5", title: "Viral Spot", category: "advertising", thumbnail: ytThumb("JhNgOnbR8Rs"), videoUrl: ytEmbed("JhNgOnbR8Rs"), aspectRatio: "9/16" },
  { id: "a6", title: "Promo Reel", category: "advertising", thumbnail: ytThumb("AxpOKSoldeQ"), videoUrl: ytEmbed("AxpOKSoldeQ"), aspectRatio: "9/16" },
  { id: "a7", title: "Ad Creative", category: "advertising", thumbnail: ytThumb("AXqFVAJuZKE"), videoUrl: ytEmbed("AXqFVAJuZKE"), aspectRatio: "9/16" },
  { id: "a8", title: "Quick Spot", category: "advertising", thumbnail: ytThumb("McZ0YbI1uls"), videoUrl: ytEmbed("McZ0YbI1uls"), aspectRatio: "9/16" },
  { id: "a9", title: "Flash Ad", category: "advertising", thumbnail: ytThumb("e6K4veNwKlo"), videoUrl: ytEmbed("e6K4veNwKlo"), aspectRatio: "9/16" },
  { id: "a10", title: "Teaser", category: "advertising", thumbnail: ytThumb("yPuJXBwpM5I"), videoUrl: ytEmbed("yPuJXBwpM5I"), aspectRatio: "9/16" },
  { id: "a11", title: "Hype Clip", category: "advertising", thumbnail: ytThumb("ErLsbxD--z8"), videoUrl: ytEmbed("ErLsbxD--z8"), aspectRatio: "9/16" },
  { id: "a12", title: "Commercial", category: "advertising", thumbnail: ytThumb("tMUK0gLXaiQ"), videoUrl: ytEmbed("tMUK0gLXaiQ"), aspectRatio: "16/9" },
  { id: "a13", title: "TV Spot", category: "advertising", thumbnail: ytThumb("TdLLEsEfS-s"), videoUrl: ytEmbed("TdLLEsEfS-s"), aspectRatio: "16/9" },
  { id: "a14", title: "Digital Ad", category: "advertising", thumbnail: ytThumb("d9SqCJwiIr8"), videoUrl: ytEmbed("d9SqCJwiIr8"), aspectRatio: "16/9", span: "col-span-2" },
  { id: "a15", title: "Brand Film", category: "advertising", thumbnail: ytThumb("MyJE5iNMZoI"), videoUrl: ytEmbed("MyJE5iNMZoI"), aspectRatio: "16/9" },
  { id: "a16", title: "Showcase", category: "advertising", thumbnail: ytThumb("H-qiOGrbL10"), videoUrl: ytEmbed("H-qiOGrbL10"), aspectRatio: "16/9" },
  { id: "a17", title: "Director's Cut", category: "advertising", thumbnail: ytThumb("_i6qN-Gjgws"), videoUrl: ytEmbed("_i6qN-Gjgws"), aspectRatio: "16/9" },
];

// Seeded shuffle for the non-pinned items so "all" view mixes categories
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const pinned = orderedItems.slice(0, 2);
const rest = seededShuffle(orderedItems.slice(2), 42);

export const portfolioItems: VideoItem[] = [...pinned, ...rest];
