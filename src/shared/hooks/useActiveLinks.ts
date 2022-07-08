import create from "zustand";

interface ActiveLinkProps {
  name: string;
  active: boolean;
}

export interface ActiveLinkHookProps {
  activeLinks: ActiveLinkProps[];
  default?: ActiveLinkProps;
  setLinkToActive: (name: string) => void;
  setLinkAsDefault: () => void;
  resetToDefaultLink: () => void;
}

export const useActiveLinkStore = create<ActiveLinkHookProps>((set) => ({
  activeLinks: [],
  setLinkToActive: (name) => {
    set((state) => ({ activeLinks: state.activeLinks }));
  },
  setLinkAsDefault: () => {},
  resetToDefaultLink: () => {},
}));

const useActiveLinks = (linksObj: ActiveLinkProps) => {};
