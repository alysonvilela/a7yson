/* eslint-disable @next/next/no-sync-scripts */
export function ExtScripts() {
    const popperMin = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
    const bootstrapMin = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js";
    const fontAwesome ="https://kit.fontawesome.com/2f1642c9ea.js";

    const popperMinIntegrity = "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    const bootstrapMinIntegrity = "sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
    return (
        <>
        <script src={popperMin} integrity={popperMinIntegrity} crossOrigin="anonymous"/>
        <script src={bootstrapMin} integrity={bootstrapMinIntegrity} crossOrigin="anonymous"/>
        <script src={fontAwesome} crossOrigin="anonymous"/>
        </>
    )
}


