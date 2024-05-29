// src/ui/components/ProductListSkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProductListSkeleton: React.FC = () => {
  const skeletonItems = Array(8)
    .fill(null)
    .map((_, index) => (
      <Card key={index} className="mb-24 h-[285px]">
        <CardHeader></CardHeader>
        <CardContent>
          <Skeleton height={30} width={200} />
          <Skeleton height={20} width={100} />
        </CardContent>
      </Card>
    ));

  return <div className="grid grid-cols-4 gap-4 w-full">{skeletonItems}</div>;
};

export default ProductListSkeleton;
