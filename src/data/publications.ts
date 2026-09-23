export type Publication = {
  citation: string;
  link?: string;
  type: "patent" | "book" | "journal" | "conference";
};

export const patent: Publication = {
  type: "patent",
  citation:
    "Emmanuel A. Oyekanlu, W. P. Thomas III, “Integrated Manufacturing Systems Architecture,” US Patent 11,878,422; Nov. 2022",
  link: "https://patents.google.com/patent/US11878422B2/en",
};

export const book: Publication = {
  type: "book",
  citation:
    "Editor — Applied AI and Multimedia Technologies for Smart Manufacturing and CPS Applications, IGI Global, April 2023",
  link: "https://www.igi-global.com/book/applied-multimedia-technologies-smart-manufacturing/266358",
};

export const publications: Publication[] = [
  {
    type: "journal",
    citation:
      "E. Oyekanlu, D. Kuhn, G. Mulroy, “Data Engineering for the Factory of the Future, Part 1: Performance Evaluation of State-of-the-Art Data Formats for Time Series Applications,” IGI Global, April 2023 (DOI: 10.4018/978-1-7998-7852-0.ch001)",
  },
  {
    type: "journal",
    citation:
      "E. Oyekanlu, D. Kuhn, G. Mulroy, “Data Engineering for the Factory of the Future, Part 2: Algorithms and Python-Based Software Development for Time-Series Data Format Conversion,” IGI Global, April 2023 (DOI: 10.4018/978-1-7998-7852-0.ch002)",
  },
  {
    type: "journal",
    citation:
      "E. A. Oyekanlu et al., “A Review of Recent Advances in Automated Guided Vehicle Technologies: Integration Challenges and Research Areas for 5G-Based Smart Manufacturing Applications,” IEEE Access, vol. 8, pp. 202312–202353, 2020, doi: 10.1109/ACCESS.2020.3035729",
    link: "https://doi.org/10.1109/ACCESS.2020.3035729",
  },
  {
    type: "conference",
    citation:
      "E. Oyekanlu, “Predictive edge computing for time series of industrial IoT and large scale critical infrastructure based on open-source software analytic of big data,” 2017 IEEE International Conference on Big Data (Big Data), Boston, MA, 2017, pp. 1663–1669",
  },
  {
    type: "conference",
    citation:
      "E. Oyekanlu, “Distributed Osmotic Computing Approach to Implementation of Explainable Predictive Deep Learning at Industrial IoT Network Edges with Real-Time Adaptive Wavelet Graphs,” 2018 IEEE First Int'l Conf. on Artificial Intelligence and Knowledge Engineering (AIKE), Laguna Hills, CA, 2018, pp. 179–188",
  },
  {
    type: "conference",
    citation:
      "E. Oyekanlu, S. Onidare, P. Oladele, “Towards statistical machine learning for edge analytics in large scale networks: Real-time Gaussian function generation with generic DSP,” 2018 First Int'l Colloquium on Smart Grid Metrology (SmaGriMet), Split, Croatia, 2018, pp. 1–6",
  },
  {
    type: "conference",
    citation:
      "E. Oyekanlu, “Osmotic Collaborative Computing for Machine Learning and Cybersecurity Applications in Industrial IoT Networks and Cyber Physical Systems with Gaussian Mixture Models,” 2018 IEEE 4th Int'l Conf. on Collaboration and Internet Computing (CIC), Philadelphia, PA, 2018, pp. 326–335",
  },
  {
    type: "conference",
    citation:
      "E. Oyekanlu, K. Scoles, P. Oladele, “Arbitrary Waveform Generation for IoT and Cyber Physical Systems Communication Networks Using C28x TMS320C2000 Digital Signal Processor,” IEEE 10th Int'l Conf. on Advanced Infocomm Technology, Stockholm, Sweden, August 2018",
  },
  {
    type: "conference",
    citation:
      "J. Chen, E. Oyekanlu, S. Onidare, W. Kulesza, “The Evaluation of the Gaussian Mixture Probability Hypothesis Density Approach for Multi-target Tracking,” IEEE Int'l Conf. on Imaging Systems & Techniques (IST), Greece, 2010",
  },
  {
    type: "journal",
    citation:
      "J. Uddin, E. Oyekanlu, C. Hong Kim, J. Myon Kim, “High Performance Computing for Large Graphs of Internet Applications Using GPU,” Journal of Multimedia and Ubiquitous Engineering, Vol. 9, 2014",
  },
  {
    type: "journal",
    citation:
      "Emmanuel Oyekanlu, “Fuzzy Inference Based Stability Optimization for IoT Data Centers DC Microgrids: Impact of Constant Power Loads on Smart Grid Communication over the Powerline,” Journal of Energy, Vol. 68, Issue 1, pp. 11–21",
  },
];

export const patentAndIeee = {
  patentText:
    "During the Smart Manufacturing project at Corning, an IEEE journal paper co-developed with Verizon Wireless engineers is available, alongside an approved US Patent (Integrated Manufacturing Systems Architecture) co-developed with another Corning engineer.",
};
