export interface Prayer {
  prayerId?: number;
  userId: number;
  title: string;
  description: string;
  dateCreated?: string;
  urgency: string;
  isPublic: boolean;
}