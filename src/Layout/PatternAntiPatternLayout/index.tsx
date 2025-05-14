import React from "react";
import styles from "./styles.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type PatternAntiPatternLayoutProps = {
  Pattern: React.FC;
  AntiPattern: React.FC;
  patternSource: string;
  antiPatternSource: string;
};

const PatternAntiPatternLayout: React.FC<PatternAntiPatternLayoutProps> = ({
  Pattern,
  AntiPattern,
  patternSource,
  antiPatternSource,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.antipattern}>
        <h2>Anti-Pattern</h2>
        <SyntaxHighlighter language="tsx" style={dracula}>
          {antiPatternSource}
        </SyntaxHighlighter>
        <h2>Component Render</h2>
        <div className={styles.antipatternContent}>
          <AntiPattern />
        </div>
      </div>
      <div className={styles.pattern}>
        <h2>Pattern</h2>
        <SyntaxHighlighter language="tsx" style={dracula}>
          {patternSource}
        </SyntaxHighlighter>
        <h2>Component Render</h2>
        <div className={styles.patternContent}>
          <Pattern />
        </div>
      </div>
    </section>
  );
};

export default PatternAntiPatternLayout;
