# kanirobocon

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Client-side scoring system for the Kani Robot Competition, designed for iPad and PC. The server-side code is published separately in the Fukui Prefecture Children's Programming Council account: [fkpc/kanirobocon-system](https://github.com/fkpc/kanirobocon-system).

This system provides a complete interface for managing the competition, from participant check-in to final tournament visualization.

## Core Components

-   **Scoring Interface (`score.html`)**: A detailed interface for judges to record points for two competing teams in real-time during a match.
-   **Tournament Bracket (`tournament.html`)**: A public-facing, auto-refreshing visualization of the final tournament bracket. It uses HTML5 Canvas to draw the bracket, team names, and connections, highlighting winners in red as results are entered.
-   **Match Generation (`match1.html`, `match2.html`)**: Scripts to automatically generate schedules for preliminary and final rounds based on registered participants and finalists.
-   **Results & Ranking (`result1.html`)**: Displays the results and rankings from the preliminary rounds. This page is also used by administrators to select the teams advancing to the final tournament.
-   **Administration Panel (`menu.html`)**: The central hub for operators, providing links to all internal, public, and administrative pages.
-   **Sponsor Display (`sponsor.html`)**: A simple, looping page that shuffles and displays sponsor logos from `sponsor.csv`, intended for display on a public screen.

## Operator Workflow

The system is designed to be used in a specific sequence, accessible from `menu.html`:

1.  **Check-in (`entry.html`)**: Mark registered teams as present for the competition.
2.  **Generate Preliminaries (`match1.html`)**: Automatically create the match schedule for the preliminary rounds.
3.  **Score Preliminaries**: From the schedule, click on a match to open the `score.html` interface and record the results.
4.  **Generate Finals (`result1.html`)**: After all preliminary matches are complete, review the rankings and generate the final tournament lists.
5.  **Run Finals (`match2.html`)**: A new schedule for the final tournament is generated. Score these matches using the linked `score.html` page.
6.  **Display Brackets (`tournament.html`)**: The final tournament progress is automatically visualized for the audience.

## Technical Notes

-   **Backend Dependency**: The system relies on a `minidb` server-side component (like `kanirobocon-system`) for all data operations. It reads and writes data as CSV files via a simple API. The endpoint is configured in `minidb.js`.
-   **Data Handling**: Communication with the backend is handled via JSONP to allow for cross-domain requests. An API key is stored in `localStorage` after login (`index.html`).
-   **Compatibility**: As noted in the source, caution should be exercised when using modern JavaScript syntax to ensure compatibility with older iPads used during the event.

## License

MIT License