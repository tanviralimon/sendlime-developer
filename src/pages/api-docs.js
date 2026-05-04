import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

const SCALAR_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/@scalar/api-reference";

export default function ApiDocs() {
  const specUrl = useBaseUrl("/openapi.yaml");

  useEffect(() => {
    const mountScalar = () => {
      const container = document.querySelector("#scalar-api-reference");

      if (!container || !window.Scalar?.createApiReference) {
        return;
      }

      container.innerHTML = "";
      window.Scalar.createApiReference("#scalar-api-reference", {
        url: specUrl,
        theme: "kepler",
        hideDownloadButton: false,
      });
    };

    const existingScript = document.querySelector("script[data-scalar-api-reference]");

    if (existingScript) {
      mountScalar();
      return;
    }

    const script = document.createElement("script");
    script.src = SCALAR_SCRIPT_URL;
    script.async = true;
    script.dataset.scalarApiReference = "true";
    script.onload = mountScalar;
    document.body.appendChild(script);
  }, [specUrl]);

  return (
    <Layout
      title="API Reference"
      description="Interactive SendLime API reference powered by Scalar."
    >
      <main className="api-reference-page">
        <div id="scalar-api-reference" />
      </main>
    </Layout>
  );
}
