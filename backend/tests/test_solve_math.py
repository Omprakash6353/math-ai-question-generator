from app.services.ai_service import solve_math


def test_addition():
    assert solve_math("What is 2 + 3?") == 5


def test_subtraction():
    assert solve_math("What is 7 - 4?") == 3


def test_multiplication():
    assert solve_math("What is 6 x 5?") == 30


def test_division():
    assert solve_math("What is 8 ÷ 2?") == 4


def test_invalid():
    assert solve_math("How many apples?") is None