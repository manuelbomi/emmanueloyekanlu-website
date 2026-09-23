export const profile = {
  name: "Emmanuel Oyekanlu",
  suffix: "Ph.D.",
  title: "Principal AI Engineer & Enterprise Architect",
  subtitle:
    "AI / Data / Enterprise Systems Architect — Agentic AI, GPU Orchestration & Data Engineering at Scale",
  location: "Winston-Salem, NC",
  phone: "+1-267-581-8688",
  email: "manuelbomi@yahoo.com",
  linkedin: "https://www.linkedin.com/in/emmanuel-oyekanlu-6ba98616/",
  github: "https://github.com/manuelbomi",
  scholar: "https://scholar.google.com/citations?user=S-jTMfkAAAAJ&hl=en",
  website: "https://emmanueloyekanlu.com",
  photo: "/images/emmanuel-oyekanlu.jpg",
  summary: `Principal AI Engineer and Enterprise Architect with a track record of delivering production
    AI, data engineering, and enterprise-architecture programs across manufacturing, financial services,
    healthcare, telecommunications, and entertainment. Builds full-stack machine learning, agentic AI, and
    GPU-accelerated systems that ship — with ML models consistently exceeding 94% accuracy and a north-star
    architecture that spans cloud, hybrid, and edge deployments. Experienced defining enterprise data/AI
    strategy and capability roadmaps, leading cross-functional teams, and translating platform architecture
    into measurable business outcomes.`,
  highlights: [
    {
      label: "Enterprise & Data Architecture",
      detail:
        "TOGAF-aligned enterprise, data, and AI north-star architectures across global, multi-vendor environments (ArchiMate, Archi, Sparx, ER/Studio).",
    },
    {
      label: "Agentic AI & LLM Systems",
      detail:
        "Provider-agnostic multi-agent platforms, RAG/GraphRAG, LangGraph, CrewAI, MCP gateways, and prompt-governance architecture for regulated industries.",
    },
    {
      label: "GPU Orchestration & HPC",
      detail:
        "CUDA / OpenCL / Slurm / Nvidia Run:AI workload orchestration on Rocky Linux HPC clusters; TensorRT & OpenVINO edge-inference optimization.",
    },
    {
      label: "Computer Vision & Edge AI",
      detail:
        "Sub-15ms industrial inspection at 99.2% accuracy on Jetson AGX Orin; YOLO, OpenCV, and classical CV pipelines deployed to 50+ edge devices.",
    },
    {
      label: "MLOps & Data Engineering",
      detail:
        "Medallion-architecture pipelines on Databricks/dbt, streaming analytics with Kafka & Flink, CI/CD for models with SageMaker, MLflow, and ZenML.",
    },
  ],
  stats: [
    { value: "94%+", label: "Typical ML model accuracy delivered" },
    { value: "33+", label: "Peer-reviewed publications" },
    { value: "198+", label: "Open-source repositories" },
    { value: "1", label: "US Patent (Integrated Manufacturing Systems Architecture)" },
  ],
} as const;
