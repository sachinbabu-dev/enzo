"use client";

import { Tag } from 'antd';
import type { Schema } from "../schema";
import type { DataTableFilterField, Option } from "../types";
import { z } from "zod";

export const tagsColor = {
    science: "#10b981",
    math: "#0ea5e9",
    literature: "#ec4899",
    history: "#eab308",
} as Record<string, string>;

export const data = [
    {
        name: "Biology",
        public: true,
        active: true,
        regions: ["HS", "MS", "ES"],
        tags: ["science"],
    },
    {
        name: "Chemistry",
        public: true,
        active: true,
        regions: ["HS", "MS"],
        tags: ["science"],
    },
    {
        name: "Physics",
        public: false,
        active: false,
        regions: ["HS"],
        tags: ["science", "math"],
    },
    {
        name: "Algebra",
        public: false,
        active: true,
        regions: ["HS", "MS"],
        tags: ["math"],
    },
    {
        name: "Geometry",
        public: true,
        active: true,
        regions: ["HS", "MS"],
        tags: ["math"],
    },
    {
        name: "English",
        public: false,
        active: true,
        regions: ["HS", "MS", "ES"],
        tags: ["literature"],
    },
    {
        name: "World History",
        public: true,
        active: true,
        regions: ["HS"],
        tags: ["history"],
    },
    {
        name: "American Literature",
        public: true,
        active: true,
        regions: ["HS"],
        tags: ["literature"],
    },
    {
        name: "Calculus",
        public: true,
        active: false,
        regions: ["HS"],
        tags: ["math"],
    },
    {
        name: "Earth Science",
        public: false,
        active: true,
        regions: ["MS", "ES"],
        tags: ["science"],
    },
    {
        name: "Creative Writing",
        public: false,
        active: true,
        regions: ["HS", "MS"],
        tags: ["literature"],
    },
    {
        name: "Ancient Civilizations",
        public: true,
        active: true,
        regions: ["MS"],
        tags: ["history"],
    },
] satisfies Schema[];

export const filterFields: DataTableFilterField<Schema>[] = [
    {
        label: "Public",
        value: "public",
        options: [
            { label: "True", value: true },
            { label: "False", value: false },
        ],
    },
    {
        label: "Active",
        value: "active",
        options: [
            { label: "True", value: true },
            { label: "False", value: false },
        ],
    },
    {
        label: "School Level",
        value: "regions",
        options: [
            { label: "ES", value: "ES" },
            { label: "MS", value: "MS" },
            { label: "HS", value: "HS" },
        ],
    },
    {
        label: "Subject Area",
        value: "tags",
        options: [
            { label: "Math", value: "math" },
            { label: "Science", value: "science" },
            { label: "Literature", value: "literature" },
            { label: "History", value: "history" },
        ],
    },
] as DataTableFilterField<Schema>[];
