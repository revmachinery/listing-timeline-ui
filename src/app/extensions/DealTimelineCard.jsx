import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => {
  return (
    <div style={{ padding: "16px" }}>
      <h3>Deal Timeline</h3>
      <p>Deal ID: {context.objectId}</p>
      <p>This is where your custom timeline view will go.</p>
    </div>
  );
});
