export type VideoCategory = "all" | "image" | "snippets" | "ads" | "films";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: "16/9" | "9/16" | "1/1" | "4/5";
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

const thumbnailBase = "https://images.unsplash.com/";

export const categories: { key: VideoCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "image", label: "Имиджевое видео" },
  { key: "snippets", label: "Сниппеты" },
  { key: "ads", label: "Реклама" },
  { key: "films", label: "Фильмы" },
];

export const portfolioItems: VideoItem[] = [
  { id: "1", title: "Brand Reveal", category: "image", thumbnail: `${thumbnailBase}photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9", span: "col-span-2" },
  { id: "2", title: "Neural Flow", category: "snippets", thumbnail: `${thumbnailBase}photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "3", title: "Product Launch", category: "ads", thumbnail: `${thumbnailBase}photo-1535016120720-40c646be5580?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "4", title: "Cyber Dreams", category: "films", thumbnail: `${thumbnailBase}photo-1518770660439-4636190af475?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "5", title: "AI Genesis", category: "image", thumbnail: `${thumbnailBase}photo-1485846234645-a62644f84728?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "6", title: "Data Pulse", category: "snippets", thumbnail: `${thumbnailBase}photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "7", title: "Metro Ad", category: "ads", thumbnail: `${thumbnailBase}photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9", span: "col-span-2" },
  { id: "8", title: "Neon Streets", category: "films", thumbnail: `${thumbnailBase}photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "9", title: "Signal Boost", category: "image", thumbnail: `${thumbnailBase}photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "10", title: "Loop Reel", category: "snippets", thumbnail: `${thumbnailBase}photo-1561883088-039e53143d73?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "11", title: "Quick Spot", category: "ads", thumbnail: `${thumbnailBase}photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "12", title: "Electric Night", category: "films", thumbnail: `${thumbnailBase}photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9", span: "col-span-2" },
  { id: "13", title: "Brand Story", category: "image", thumbnail: `${thumbnailBase}photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "14", title: "Clip Wave", category: "snippets", thumbnail: `${thumbnailBase}photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "15", title: "Social Spot", category: "ads", thumbnail: `${thumbnailBase}photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "16", title: "Documentary AI", category: "films", thumbnail: `${thumbnailBase}photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "17", title: "Vision Cast", category: "image", thumbnail: `${thumbnailBase}photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "18", title: "Byte Reel", category: "snippets", thumbnail: `${thumbnailBase}photo-1526628953301-3e589a6a8b74?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "19", title: "Promo X", category: "ads", thumbnail: `${thumbnailBase}photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9", span: "col-span-2" },
  { id: "20", title: "Parallel", category: "films", thumbnail: `${thumbnailBase}photo-1485846234645-a62644f84728?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "21", title: "Pulse Brand", category: "image", thumbnail: `${thumbnailBase}photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "22", title: "Micro Cut", category: "snippets", thumbnail: `${thumbnailBase}photo-1563206767-5b18f218e8de?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "23", title: "Ad Blast", category: "ads", thumbnail: `${thumbnailBase}photo-1553877522-43269d4ea984?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "24", title: "Synthetic", category: "films", thumbnail: `${thumbnailBase}photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "25", title: "Core Image", category: "image", thumbnail: `${thumbnailBase}photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "26", title: "Flash Clip", category: "snippets", thumbnail: `${thumbnailBase}photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "27", title: "TV Spot", category: "ads", thumbnail: `${thumbnailBase}photo-1516321497487-e288fb19713f?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
  { id: "28", title: "Epoch", category: "films", thumbnail: `${thumbnailBase}photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9", span: "col-span-2" },
  { id: "29", title: "Identity", category: "image", thumbnail: `${thumbnailBase}photo-1559028012-481c04fa702d?w=400&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "1/1" },
  { id: "30", title: "Clip Storm", category: "snippets", thumbnail: `${thumbnailBase}photo-1550439062-609e1531270e?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "31", title: "Viral X", category: "ads", thumbnail: `${thumbnailBase}photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "16/9" },
  { id: "32", title: "Horizon", category: "films", thumbnail: `${thumbnailBase}photo-1524712245354-2c4e5e7121c0?w=400&h=600&fit=crop`, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", aspectRatio: "9/16" },
];
