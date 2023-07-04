import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ImageProps } from "next/image";

type SkeletonLoaderProps = Pick<ImageProps, "width" | "height"> & {
  style?: React.CSSProperties;
};

export const SkeletonLoader = ({ style }: SkeletonLoaderProps) => (
  <Skeleton
    width={"100%"}
    height={"100%"}
    baseColor="##dedede"
    style={style}
  ></Skeleton>
);
