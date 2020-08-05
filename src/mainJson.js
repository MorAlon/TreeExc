export const mainJson = {
    "child_runs": [
        {
            "step": {
                "type": "ConditionStep",
                "title": "If number > 40",
                "length": 3,
                "predicate": "<lambda>",
                "if_true": {
                    "type": "Flow",
                    "title": "First Flow",
                    "length": 3
                },
                "if_false": null
            },
            "child_runs": [
                {
                    "step": {
                        "type": "Flow",
                        "title": "First Flow",
                        "length": 3
                    },
                    "child_runs": [
                        {
                            "step": {
                                "type": "FunctionStep",
                                "title": "Add",
                                "length": 1,
                                "function": "<lambda>",
                                "args": {
                                    "num1": 50,
                                    "num2": 5
                                }
                            },
                            "child_runs": [],
                            "return_value": 55,
                            "run_time": 0.004242658615112305
                        },
                        {
                            "step": {
                                "type": "FunctionStep",
                                "title": "Subtract",
                                "length": 1,
                                "function": "<lambda>",
                                "args": {
                                    "num1": 2,
                                    "num2": 30
                                }
                            },
                            "child_runs": [],
                            "return_value": -28,
                            "run_time": 0.0
                        },
                        {
                            "step": {
                                "type": "FunctionStep",
                                "title": "Multiply",
                                "length": 1,
                                "function": "<lambda>",
                                "args": {
                                    "num1": 3,
                                    "num2": 4
                                }
                            },
                            "child_runs": [],
                            "return_value": 12,
                            "run_time": 2.467161178588867
                        }
                    ],
                    "return_value": 12,
                    "run_time": 2.474109172821045
                }
            ],
            "return_value": 12,
            "run_time": 2.477100372314453
        },
        {
            "step": {
                "type": "ForLoopStep",
                "title": "Simple Square for Loop",
                "length": 4,
                "items": [
                    4,
                    3,
                    2,
                    1
                ]
            },
            "child_runs": [
                {
                    "step": {
                        "type": "FunctionStep",
                        "title": "Square",
                        "length": 1,
                        "function": "<lambda>",
                        "args": {
                            "num": 4
                        }
                    },
                    "child_runs": [],
                    "return_value": 16,
                    "run_time": 0.0009982585906982422
                },
                {
                    "step": {
                        "type": "FunctionStep",
                        "title": "Square",
                        "length": 1,
                        "function": "<lambda>",
                        "args": {
                            "num": 3
                        }
                    },
                    "child_runs": [],
                    "return_value": 9,
                    "run_time": 0.0009982585906982422
                },
                {
                    "step": {
                        "type": "FunctionStep",
                        "title": "Square",
                        "length": 1,
                        "function": "<lambda>",
                        "args": {
                            "num": 2
                        }
                    },
                    "child_runs": [],
                    "return_value": 4,
                    "run_time": 0.0009982585906982422
                },
                {
                    "step": {
                        "type": "FunctionStep",
                        "title": "Square",
                        "length": 1,
                        "function": "<lambda>",
                        "args": {
                            "num": 1
                        }
                    },
                    "child_runs": [],
                    "return_value": 1,
                    "run_time": 0.0009982585906982422
                }
            ],
            "return_value": 1,
            "run_time": 0.07609295845031738
        },
        {
            "step": {
                "type": "FunctionStep",
                "title": "Multiply 2 by 1",
                "length": 1,
                "function": "<lambda>",
                "args": {
                    "num1": 2,
                    "num2": 1
                }
            },
            "child_runs": [],
            "return_value": 2,
            "run_time": 0.0009970664978027344
        }
    ],
    "progress": 1.0,
    "steps_finished": 13,
    "total_steps": 13
}

