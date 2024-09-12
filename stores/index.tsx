import { create } from "zustand";

interface IAppState {
  name: string;
  tracks: ITrack[];
}

interface ITrack {
  name: string
  distance: string
  sectors: ITrackSectors
  time: string
}

interface ITrackSectors {
  1: ISector
  2: ISector
  3: ISector
}

interface ISector {
  begin: string;
  end: string;
  color: SectorColors;
  time: string;
  distance: string;
}

enum SectorColors {
  GREEN = "green",
  YELLOW = "yellow",
  PURPLE = "purple",
}

const useAppStore = create<IAppState>()((set) => ({
  name: "",
  tracks: [],
}));
