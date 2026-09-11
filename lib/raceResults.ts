/** Official Valley Preferred (T-Town) results — Ben Covi, bib 416, Edge Cycling */

export type RaceResult = {
  date: string;
  dateLabel: string;
  event: string;
  className: string;
  place: number;
  fieldNote?: string;
};

export const raceResults: RaceResult[] = [
  {
    date: "2026-05-16",
    dateLabel: "May 16, 2026",
    event: "8 Lap Scratch",
    className: "Men Novice",
    place: 3,
  },
  {
    date: "2026-05-16",
    dateLabel: "May 16, 2026",
    event: "Elimination",
    className: "Men Novice",
    place: 3,
  },
  {
    date: "2026-05-16",
    dateLabel: "May 16, 2026",
    event: "15 Lap Points Race",
    className: "Men Novice",
    place: 1,
  },
  {
    date: "2026-05-30",
    dateLabel: "May 30, 2026",
    event: "10 Lap Scratch",
    className: "Men Novice",
    place: 1,
  },
  {
    date: "2026-05-30",
    dateLabel: "May 30, 2026",
    event: "Miss and Out",
    className: "Men Novice",
    place: 1,
  },
  {
    date: "2026-05-30",
    dateLabel: "May 30, 2026",
    event: "Snowball",
    className: "Men Novice",
    place: 3,
  },
  {
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    event: "Flying Mile",
    className: "Men Novice",
    place: 2,
  },
  {
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    event: "Elimination",
    className: "Men Novice/4",
    place: 3,
  },
  {
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    event: "15 Lap Points",
    className: "Men Novice/4",
    place: 4,
  },
  {
    date: "2026-08-08",
    dateLabel: "August 8, 2026",
    event: "Miss and Out",
    className: "Men Novice",
    place: 2,
  },
  {
    date: "2026-08-08",
    dateLabel: "August 8, 2026",
    event: "Snowball",
    className: "Men Novice",
    place: 3,
  },
];

export const raceVenue = {
  name: "Valley Preferred Cycling Center",
  shortName: "T-Town",
  location: "Trexlertown, PA",
  series: "Saturday Masters + Rookies",
  team: "Edge Cycling",
  bib: 416,
};

export function winsCount() {
  return raceResults.filter((r) => r.place === 1).length;
}

export function podiumCount() {
  return raceResults.filter((r) => r.place <= 3).length;
}

export function placeLabel(place: number) {
  if (place === 1) return "1st";
  if (place === 2) return "2nd";
  if (place === 3) return "3rd";
  return `${place}th`;
}
