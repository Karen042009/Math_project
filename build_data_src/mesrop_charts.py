"""Render the submitted observations; do not generate replacement experiments."""
from pathlib import Path
import csv
import math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt


def render():
    folder = Path(__file__).resolve().parents[1] / "assets" / "contributions"
    with (folder / "mesrop-pi-analysis.csv").open(encoding="utf-8-sig") as stream:
        rows = list(csv.DictReader(stream))
    groups = {}
    for row in rows:
        n, value = int(row["sample_count"]), float(row["pi_estimate"])
        groups.setdefault(n, []).append(value)
        assert abs(abs(value - math.pi) - float(row["absolute_error"])) < 0.0000005
    counts = sorted(groups)
    means = [sum(groups[n]) / len(groups[n]) for n in counts]
    errors = [sum(abs(x - math.pi) for x in groups[n]) / len(groups[n]) for n in counts]
    plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 11, "svg.fonttype": "none"})
    fig, axes = plt.subplots(1, 2, figsize=(12, 4.6), layout="constrained")
    for n in counts:
        axes[0].scatter([n] * len(groups[n]), groups[n], color="#7552a0", s=45, alpha=0.8)
    axes[0].plot(counts, means, color="#d07921", marker="D", label="Mean of 5 runs")
    axes[0].scatter([], [], color="#7552a0", label="Submitted observations (20 runs)")
    axes[0].axhline(math.pi, color="#385768", linestyle="--", label="Exact pi")
    axes[0].set(xscale="log", xlabel="Samples per run (N)", ylabel="Estimated pi", title="Results and their variability")
    axes[0].legend(fontsize=8, loc="lower right")
    axes[1].loglog(counts, errors, color="#7552a0", marker="o", label="Mean absolute error (5 runs)")
    guide = [errors[0] * math.sqrt(counts[0] / n) for n in counts]
    axes[1].loglog(counts, guide, color="#385768", linestyle="--", label="1/sqrt(N) guide, scaled at N=100")
    axes[1].set(xlabel="Samples per run (N)", ylabel="Mean absolute error", title="Error and sample size")
    axes[1].legend(fontsize=8)
    for ax in axes:
        ax.grid(True, which="major", alpha=0.2)
        ax.set_xticks(counts, ["100", "1,000", "10,000", "100,000"])
    fig.suptitle("Mesrop Karapetyan — analysis of the 20 submitted Monte Carlo runs", fontsize=13)
    for extension in ["svg", "png"]:
        fig.savefig(folder / f"mesrop-pi-analysis.{extension}", dpi=180, facecolor="white")
    plt.close(fig)
    print("Rendered SVG and PNG from all 20 submitted observations")


if __name__ == "__main__":
    render()
