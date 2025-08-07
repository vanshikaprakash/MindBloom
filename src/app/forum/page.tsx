
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ForumHome from "@/components/ForumHome";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ForumSkeleton() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-10 w-32" />
            </div>
            <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="p-4 border rounded-lg">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}