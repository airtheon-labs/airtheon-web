"use client";

import { useParams } from "next/navigation";

export const runtime = "edge";

export default function Page() {
    const params = useParams();
    const { spaceName } = params;

    return <div className="p-5">{spaceName} Page</div>;
}
