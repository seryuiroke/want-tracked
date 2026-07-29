# want, tracked

### exploring consumer desire through digital attention

**want, tracked** is a data science project exploring how online attention changes across fashion, food, lifestyle, and internet culture.

the project uses monthly Wikipedia pageview data to compare five consumer trends:

- onitsuka tiger
- uniqlo
- matcha
- digital cameras
- jorts

rather than treating pageviews as direct evidence of purchasing behavior, the project uses them as a proxy for public attention. the analysis examines how large each trend's audience was, when attention peaked, and whether interest increased or declined over time.

---

## research question

> how does online attention change across selected consumer trends, and what might those patterns reveal about public interest?

this project investigates patterns in digital attention using monthly Wikipedia pageview data. rather than measuring purchasing behavior or proving why trends become popular, it examines how public interest changes over time and how those patterns may provide insight into consumer behavior.

the analysis does not claim that social media, cultural influence, or other external events directly caused these changes. instead, these factors are discussed only as possible interpretations of the observed patterns.

---

## live website

the interactive website allows visitors to select each trend and explore:

- average monthly attention
- peak monthly attention
- percentage growth
- an individual pageview graph
- a short interpretation of the pattern

the website uses a sakura-inspired editorial design and was built with HTML, CSS, and JavaScript.

visit the live project here:

https://seryuiroke.github.io/want-tracked/
---

## key findings

### attention and growth measure different things

matcha received the highest average attention, while jorts experienced the strongest percentage growth. a trend can have a small audience while still growing quickly.

### established brands showed positive growth

uniqlo and onitsuka tiger combined relatively large audiences with positive growth over the study period.

### high attention does not guarantee continued growth

matcha had the largest average audience but ended the study period below its initial attention level.

### online interest changes over time

digital cameras experienced substantial overall attention but declined between the first and latest observations. this demonstrates that online visibility is dynamic rather than permanent.

---

## final trend summary

| trend | average attention | peak attention | growth |
|---|---:|---:|---:|
| matcha | 87,661 | 180,360 | -19.24% |
| uniqlo | 46,101 | 85,945 | +21.74% |
| onitsuka tiger | 24,721 | 115,309 | +43.10% |
| digital cameras | 17,146 | 27,077 | -63.33% |
| jorts | 41 | 266 | +124.14% |

values are based on monthly Wikipedia pageviews. displayed averages are rounded to the nearest whole number.

---

## methodology

### data collection

monthly Wikipedia pageviews were collected from January 2021 through June 2026.

each observation contains:

- date
- article
- trend identifier
- monthly pageviews

### data preparation

the data was checked for:

- missing values
- duplicate observations
- consistent date formatting
- comparable study periods

incomplete July 2026 observations were excluded from the final dataset.

### metrics

the following metrics were calculated for each trend:

- **average attention:** mean monthly pageviews
- **peak attention:** highest monthly pageview value
- **lowest attention:** lowest monthly pageview value
- **total attention:** sum of pageviews across the study period
- **percentage growth:** change between the first and latest observations

### candidate selection

fifteen possible consumer trends were initially considered across fashion, travel, food, beauty, and internet culture.

the final analysis focused on five trends that provided consistent historical observations while representing different forms of consumer interest.

---

## limitations

Wikipedia pageviews measure visits to an article, not purchases, sales, or individual preferences.

the data cannot determine:

- why someone visited a page
- whether attention came from social media
- whether pageviews resulted in a purchase
- whether media coverage or external events caused a spike
- whether the same person visited an article multiple times

therefore, the results describe patterns in online attention and do not establish causation.

because the selected articles represent different types of topics—including brands, products, and broader cultural concepts—their absolute pageview totals are not perfectly comparable. for this reason, changes within each trend and overall patterns are generally more informative than direct comparisons of raw pageview counts.

---

## project structure

```text
want-tracked/
├── data/
│   ├── raw/
│   ├── trend_metadata.csv
│   ├── trend_profiles.csv
│   └── trend_summary.csv
│
├── notebooks/
│   ├── 01_data_collection.ipynb
│   ├── 02_exploratory_analysis.ipynb
│   ├── 03_discussion_and_economic_insights.ipynb
│   └── 04_candidate_trends_and_methodology.ipynb
│
├── docs/
│   ├── images/
│   │   ├── camera.png
│   │   ├── jorts.png
│   │   ├── matcha.png
│   │   ├── onitsuka.png
│   │   └── uniqlo.png
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── LICENSE
└── README.md
```

---

## notebooks

### 01_data_collection.ipynb

collects monthly Wikipedia pageview data, prepares the combined dataset, creates trend profiles, and exports cleaned files for analysis.

### 02_exploratory_analysis.ipynb

explores consumer attention through visualizations, summary statistics, growth rates, normalized comparisons, and trend behavior over time.

### 03_discussion_and_economic_insights.ipynb

interprets the results using concepts from consumer behavior, economics, and digital culture while discussing ethical considerations and project limitations.

### 04_candidate_trends_and_methodology.ipynb

documents the broader candidate trend selection process and explains why the final five trends were chosen for analysis.

---

## website features

the interactive website includes:

- five clickable trend cards
- dynamically updating statistics
- individual pageview graphs
- written interpretations
- overall findings
- methodology and limitations
- responsive sakura-inspired styling

---

## how to run

1. clone this repository.

2. install the required packages:

```bash
pip install -r requirements.txt
```

3. run the notebooks in numerical order:

- 01_data_collection.ipynb
- 02_exploratory_analysis.ipynb
- 03_discussion_and_economic_insights.ipynb
- 04_candidate_trends_and_methodology.ipynb

4. open `docs/index.html` in a browser, or visit the deployed GitHub Pages website to explore the interactive dashboard.

---

## tools and technologies

- python
- pandas
- matplotlib
- jupyter notebook
- Wikipedia Pageviews API
- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

---

## conclusion

this project demonstrates how publicly available digital attention data can be used to explore changing patterns in consumer interest across fashion, food, and lifestyle topics.

while Wikipedia pageviews cannot explain why trends become popular or whether attention leads to purchasing behavior, they provide a useful way to observe how public interest changes over time.

future work could combine multiple sources of online attention to build a broader understanding of consumer behavior and digital culture.

---

## future improvements

possible future extensions include:

- expanding the analysis to additional consumer trends
- incorporating Google Trends or search engine data for comparison
- adding fully interactive charts using Plotly or Chart.js
- exploring clustering or time-series forecasting techniques
- comparing consumer attention across multiple countries
- incorporating sales or pricing data when reliable public data is available

---

## author

**Shraddha Rao**

Summer 2026

Economics • Data Science • Consumer Behavior