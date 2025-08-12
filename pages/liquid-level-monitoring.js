import Head from "next/head";
import InstallationSteps from "@/src/components/products/InstallationSteps";
import LiquidDevice from "@/src/components/products/LiquidDevice";
export default function Liquid() {
  return (
    <>
      <Head>
        <title>Liquid Level Monitoring</title>
      </Head>
      <LiquidDevice />
      <InstallationSteps />
    </>
  );
}
