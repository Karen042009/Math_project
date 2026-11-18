# Monte Carlo calculations by Arthur Danielyan.
# The message's damaged main-entry formatting is restored below; algorithms are unchanged.
import numpy as np


def simulate_pi(num_samples):
    """Փուլ 3․ π-ի մոտարկում՝ Կյուրեղյան Ստեփանի մոդելի հիման վրա։"""
    x = np.random.uniform(-1, 1, num_samples)
    y = np.random.uniform(-1, 1, num_samples)
    inside_circle = (x**2 + y**2) <= 1
    points_inside = np.sum(inside_circle)
    pi_estimate = 4 * points_inside / num_samples
    return pi_estimate


def target_function(x):
    """Ֆունկցիա ինտեգրման համար՝ f(x) = x²։"""
    return x**2


def simulate_integral(num_samples, a, b):
    """Փուլ 4․ ընտրանքի միջինով ինտեգրում՝ Ասատրյան Դավիթի վերլուծության համար։"""
    random_x = np.random.uniform(a, b, num_samples)
    function_values = target_function(random_x)
    integral_estimate = (b - a) * np.mean(function_values)
    return integral_estimate


if __name__ == "__main__":
    # Փորձարկումների քանակը՝ Կարապետյան Մեսրոպի վիճակագրական վերլուծության համար։
    samples = 100000
    print("--- ՄՈՆՏԵ-ԿԱՌԼՈՅԻ ՍԻՄՈՒԼՅԱՑԻԱՆԵՐԻ ԱՐԴՅՈՒՆՔՆԵՐ ---")
    pi_val = simulate_pi(samples)
    print(f"1. Pi թվի մոտարկված արժեքը ({samples} նետումով): {pi_val}")
    print(f"   Իրական արժեքը: {np.pi} (Սխալանքը: {abs(np.pi - pi_val):.5f})")
    a, b = 0, 2
    exact_integral = (b**3) / 3 - (a**3) / 3
    mc_integral = simulate_integral(samples, a, b)
    print(f"\n2. f(x) = x^2 ֆունկցիայի ինտեգրալը [{a}, {b}] միջակայքում:")
    print(f"   Մոնտե-Կառլոյի արժեքը: {mc_integral:.5f}")
    print(f"   Ճշգրիտ արժեքը (Նյուտոն-Լեյբնից): {exact_integral:.5f}")
    print(f"   Սխալանքը: {abs(exact_integral - mc_integral):.5f}")
