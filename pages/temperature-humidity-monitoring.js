import Head from "next/head";
import TempDevice from "@/src/components/products/TempDevice";
import InstallationSteps from "@/src/components/products/InstallationSteps";
export default function Temperature() {
  return (
    <>
      <Head>
        <title>Temperature Humidity Monitoring</title>
      </Head>
      <TempDevice />
      <InstallationSteps />
    </>
  );
}
