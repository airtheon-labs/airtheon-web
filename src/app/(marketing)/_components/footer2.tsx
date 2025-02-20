"use client";

import { BrandWordmarkLogo } from "@/components/brand-logo";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const helpUrl = `${process.env.NEXT_PUBLIC_HELP_URL!}`;

export function Footer2() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
                <div className="flex items-center justify-between gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <BrandWordmarkLogo />
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href={`${helpUrl}/legal/terms-of-service`}
                            className="text-sm hover:underline underline-offset-4"
                        >
                            Terms
                        </Link>
                        <Link
                            href={`${helpUrl}/legal/privacy-policy`}
                            className="text-sm hover:underline underline-offset-4"
                        >
                            Privacy
                        </Link>
                    </div>
                </div>

                <Separator className="my-5" />

                <div className="flex flex-col items-center gap-4 py-5">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
