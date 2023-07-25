import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="320px" borderRadius='40px' overflow={"hidden"} marginRight='22px'>
      < Skeleton height="450px"/>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      
    </Card>
  );
};

export default GameCardSkeleton;
