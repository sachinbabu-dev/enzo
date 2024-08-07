// models/Course.ts
export interface Course {
    name: string;
    public: boolean;
    active: boolean;
    regions: string[];
    tags: string[];
}
