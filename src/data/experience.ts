export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "ForgeZen (Startup)",
    role: "Principal AI Solutions Architect — Consultant",
    period: "June 2026 – Present",
    bullets: [
      "Architected a provider-agnostic multi-agent AI platform (naming/brand generation, market intelligence, enterprise assessment) decoupled from any single LLM vendor via a providers/ abstraction layer.",
      "Designed model routing and cost-governance architecture tiering frontier vs. lightweight models to optimize cost vs. accuracy.",
      "Built a prompt registry and versioning system with Pydantic-validated, auditable structured outputs.",
      "Implemented RAG grounding with citation display over a 210-document enterprise knowledge base using pgvector.",
      "Set multi-tenant SaaS security architecture: tenant isolation, RBAC, per-tenant AI cost tracking, and audit logging.",
      "Owned full-stack technical direction (Django/DRF, Next.js, Celery, Azure) as sole technical decision-maker.",
    ],
  },
  {
    company: "CohnReznick LLC",
    role: "Principal AI Solutions Software Engineer — Consultant",
    period: "April 2026 – June 2026",
    bullets: [
      "Reported to CohnReznick's Global Head of AI, designing and deploying AI-native solutions for financial, banking, and auditing workflows.",
      "Architected AI-enabled applications using LLMs, SLMs, RAG/GraphRAG, and NLP for enterprise workflow transformation.",
      "Built full-stack applications integrated with Claude Code, GitHub Copilot, and Azure AI services.",
      "Healthcare Audit Data Engineering & Compliance: Engineered a Django-based backend and data pipelines to ingest, validate, transform, and organize client data for audit and advisory workflows in regulated healthcare service engagements.",
      "Designed secure data connectors and integrations with cybersecurity, risk, and IAM teams.",
      "Led company-wide AI initiatives, aligning delivery with leadership and business objectives.",
    ],
  },
  {
    company: "Handshake AI — Project Proctor (Project Darwin)",
    role: "AI Fellow — Consultant",
    period: "March 2026 – Ongoing",
    bullets: ["Training LLMs to better support STEM-based reasoning."],
  },
  {
    company: "Mercor (contracted to a leading AI research lab)",
    role: "Machine Learning Engineer — Data/LLM/Prompt Engineering Consultant",
    period: "September 2025 – Ongoing",
    bullets: [
      "Orchestrated reproducible ML pipelines and LLM training workflows under ephemeral execution constraints for agentic-trajectory generation.",
      "Directed LLM-guided EDA strategies across Kaggle-style datasets with GPU-optimized PyTorch DataLoaders.",
      "Architected prompt-driven orchestration for Slurm-scheduled NVIDIA A100 GPU environments on Rocky Linux.",
      "Applied gradient checkpointing, mixed-precision (FP16/BF16), and distributed data parallelism to maximize A100 utilization.",
      "Shaped LLM-agent problem-solving trajectories end-to-end, from EDA to full-dataset optimization, for autonomous AI research.",
    ],
  },
  {
    company: "VerzX / Zintro",
    role: "Consultant — DevOps Architecture for Edge Computing & IoT",
    period: "October 2024 – Ongoing",
    bullets: [
      "System reliability & risk assessment; MLOps for edge computing, industrial IoT, and large-scale IoT device deployments.",
    ],
  },
  {
    company: "VisasQ / Coleman",
    role: "Consultant — AI Technology Trends & Industrial Applications",
    period: "August 2024 – Ongoing",
    bullets: ["AI/ML solution deployments and project lifecycle management."],
  },
  {
    company: "GIS Ltd",
    role: "Digital Transformation (DX) Specialist",
    period: "May 2024 – June 2024",
    bullets: [
      "Architected secure, data-privacy-first digital transformation templates for large and medium enterprises.",
      "Defined data engineering, management, architecture, privacy, and cybersecurity specifications for enterprise and government digital transformation.",
      "Evaluated Google ADK, Vertex AI, Google AI Studio, Workspace, and Gemini for enterprise AI transformation.",
    ],
  },
  {
    company: "Corning Incorporated",
    role: "Software and Systems Project Engineer",
    period: "September 2019 – January 2024",
    location: "Painted Post, NY",
    bullets: [
      "Generative AI (2023–2024): Built a customized ChatGPT interface for industrial use with Docker, PostgreSQL, Vue, and Django; enabled RAG on GCP Vertex AI with GPT4All.",
      "Software Engineer (2023): Built anomaly detection for glass-surface fault contours using Databricks (Delta Lake, Unity Catalog), Spark, PyOD; shipped a Tkinter/PyInstaller desktop app that cut product waste 31%.",
      "Lead Architect, Computer Vision & IoT (2023): Deployed real-time vision inspection on Jetson AGX Orin at <15ms latency / 99.2% accuracy, cutting defect escape rate 40%; led MLOps CI/CD to 50+ edge devices via AWS SageMaker + IoT Greengrass.",
      "NLP Engineer (2022–2023): Built Spacy/Gensim/TF-IDF/LSI + LSTM fault-prediction models on Kafka/Flink streaming data, cutting fault ID time ~97%; deployed on GCP Cloud Run with BigQuery ML.",
      "ML Engineer (2020): Built a VGG16 + LLM-prompted image recommendation system with FAISS/HNSW/IVF nearest-neighbor search, cutting fault inferencing from ~2 weeks to <1 minute.",
      "Healthcare/Life Sciences Data Engineering & Test Data Management, HYPERStack Project (2020–2023): Supported cancer drug-discovery and 3D cell-culture research teams by engineering cloud data pipelines (AWS S3, Azure, Oracle, PostgreSQL) and Databricks-based test-data provisioning that curated realistic, production-scale research/test datasets while preserving data relationships and integrity.",
      "Project Engineer, IoT Vision (2020): Led a YOLO + Jetson Nano/Xavier COVID-19 social-distancing system using GeoPandas/Fiona/Shapely for geofencing; 93% cheaper than the comparable vendor solution. Also built a vaccine-vial tracking system with Hough Transforms and CUDA-accelerated OpenCV.",
      "Project Engineer, Smart Manufacturing (2019–2023): Led a cross-functional team (Corning, Verizon, AWS, Gestalt Robotics) defining private-5G AGV/AMR enterprise architecture; holds a resulting US Patent and an IEEE-published journal paper with Verizon engineers.",
    ],
  },
  {
    company: "Comcast",
    role: "Data Science Engineer",
    period: "March 2019 – September 2019",
    location: "Philadelphia, PA",
    bullets: [
      "Analyzed real-time and batch data via Databricks, Presto, Spark, Kafka, and AWS (Kinesis, S3, Elasticsearch, Lambda).",
      "Analyzed network health data across ~29M devices plus clickstream data for root-cause analysis, improving customer experience and reducing churn.",
    ],
  },
  {
    company: "Drexel University",
    role: "Adjunct Professor, Applied Physics",
    period: "September 2018 – March 2019",
    location: "Philadelphia, PA",
    bullets: [
      "Taught applied/computational physics with emphasis on big-data technologies; consistently scored high student evaluation ratings.",
    ],
  },
  {
    company: "Ph.D. & M.Sc. Studies — Drexel University / Blekinge Institute of Technology",
    role: "Doctoral Researcher, Electrical Engineering",
    period: "August 2008 – August 2018",
    bullets: [
      "Ph.D. focused on embedded wavelet-based statistical ML at the edge of large IIoT/smart-grid networks using a fixed-point C28x DSP.",
      "Developed the industry's first Embedded-C wavelet suite for the C28x DSP, applied to ECG signal characterization and low-voltage powerline analysis.",
      "Worked briefly with the US Department of Energy studying grid effects of large non-linear loads (EVs, data centers) and mixed renewable/non-renewable generation.",
      "Applied QGIS/PostGIS spatial risk assessment to model weather impact on grid stability.",
    ],
  },
  {
    company: "Rechez Communications",
    role: "Network Data & Systems Engineer",
    period: "February 2005 – August 2008",
    location: "Awka, Nigeria",
    bullets: [
      "Designed an enterprise-grade network data and monitoring architecture across LAN, WAN, VSAT, and consumer access networks on Fedora Linux.",
      "Led the technical strategy behind NCC regulatory license approval, enabling expansion into underserved regions.",
      "Redesigned vendor/connectivity strategy, cutting recurring operational costs by 42%.",
    ],
  },
];
