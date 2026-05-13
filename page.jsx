export default function Page() {
  const sampleMessage = `Hey John,

I noticed your team is scaling outbound quickly. We can probably help increase reply rates using AI automation.

Let me know if you'd be open to a quick call tomorrow.

Best,
AI SDR`;

  const results = [
    {
      title: "Spam Risk",
      value: "Moderate",
      desc: "Message contains generic outbound patterns."
    },
    {
      title: "Brand Tone",
      value: "Weak",
      desc: "Lacks personalization and brand voice."
    },
    {
      title: "Compliance",
      value: "Safe",
      desc: "No compliance issues detected."
    }
  ];

  const rewritten = `Hey John,

Saw your team is scaling outbound.

We’re building infrastructure that ensures AI-generated outreach stays compliant, on-brand, and higher converting before sending.

Happy to show a quick demo if relevant.

Best,
Founder @ Sovereax`;

  return (
    <div style={{ fontFamily: "Arial", padding: 40 }}>
      <h1>Sovereax Demo</h1>

      <h2>AI Generated Message</h2>
      <pre>{sampleMessage}</pre>

      <h2>Analysis</h2>
      {results.map((r, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <b>{r.title}</b> - {r.value}
          <p>{r.desc}</p>
        </div>
      ))}

      <h2>Optimized Version</h2>
      <pre>{rewritten}</pre>
    </div>
  );
}
