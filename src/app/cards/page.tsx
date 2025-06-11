import React from "react";
import {CardsItem} from "@/components/CardsItem";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Cards | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Cards page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Cards: React.FC = () => {
  return (
    <DefaultLayout>
      <CardsItem imageSrc={""} />
    </DefaultLayout>
  );
};

export default Cards;
