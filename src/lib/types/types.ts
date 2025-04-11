export type TChildren = {
  children: React.ReactNode;
};

export interface IGAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}