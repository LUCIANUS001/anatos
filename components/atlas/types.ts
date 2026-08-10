export type AtlasLayout =
  | "inline"
  | "left"
  | "right"
  | "wide"
  | "gallery"
  | "comparison"
  | "full"
  | "center";

export type AtlasImageType =
  | "photo"
  | "illustration"
  | "xray"
  | "ct"
  | "mri"
  | "histology"
  | "clinical"
  | "cadaver"
  | "3d"
  | "practical";

export interface AtlasHotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
}

export interface AtlasFigure {
  id: string;
  src: string;
  title: string;
  caption: string;
  layout?: AtlasLayout | string;
  type?: AtlasImageType | string;
  zoom?: boolean;
  labels?: string[];
  credit?: string;
  hotspots?: AtlasHotspot[];
}

export interface AtlasComparison {
  title: string;
  left: AtlasFigure;
  right: AtlasFigure;
}

export interface AtlasSection {
  figures?: AtlasFigure[];
  comparison?: AtlasComparison[];
  gallery?: AtlasFigure[];
}

export interface LessonAtlas {
  definition?: AtlasSection;
  introduction?: AtlasSection;
  anatomicalPosition?: AtlasSection;
  sideDetermination?: AtlasSection;
  features?: AtlasSection;
  relations?: AtlasSection;
  surfaceAnatomy?: AtlasSection;
  bloodSupply?: AtlasSection;
  nerves?: AtlasSection;
  muscles?: AtlasSection;
  landmarks?: AtlasSection;
  ossification?: AtlasSection;
  development?: AtlasSection;
  variations?: AtlasSection;
  radiologicalAnatomy?: AtlasSection;
  clinical?: AtlasSection;
  practical?: AtlasSection;
}