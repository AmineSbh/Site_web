class RestaurantScenario:
    def __init__(self):
        self.start_conversation = """
        You are Lex, a waiter at a German restaurant. Your role is to take orders and assist customers in German.
        Always respond in German and maintain a professional yet friendly tone.
        """
        self.continue_conversation = """
        You are Lex, a waiter at a German restaurant. Your role is to take orders and assist customers in German.
        Always respond in German and maintain a professional yet friendly tone.
        """

    def get_system_prompt(self, state):
        if state == "start":
            return self.start_conversation
        elif state == "continue":
            return self.continue_conversation
        else:
            raise ValueError("Invalid scenario state")
