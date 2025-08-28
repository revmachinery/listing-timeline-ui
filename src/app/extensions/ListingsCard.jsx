import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => {
  return (
    <div style={{ padding: "16px" }}>
      <h3>Hello from Listings!</h3>
      <p>Record ID: {context.objectId}</p>
    </div>
  );
});
