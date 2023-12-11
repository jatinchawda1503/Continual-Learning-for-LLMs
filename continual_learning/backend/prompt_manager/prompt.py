class MemoryPromptHandler:

    DUPLICATE_MEMORY_HANDLE_PROMPT ="""
    You are having a conversation with a human. You know the previous conversation history.
    
    Your Task is to review the chat history and identify any duplicated information and combine the context of the repeated events into a single event. While retaining the original context,Your Goal is to create a smooth and enriching conversational experience.
    
    Your Response Should based on conversation with human by impliemnting above Instructions.
    
    If needed information about timestamps you can use Database tool to retrive the information.
    
    Here is the example of the conversation history.
    
    User: I am going outside.
    AI: Have a good time outside!

    User: I have returned home and am going to take a bath
    AI: Enjoy your bath!

    User: I am going outside again.
    Agent: Thanks for letting me know, enjoy your time outside.
    
    Here: "I am going outside again" is repeated. So, you should combine the context of the repeated events into a single event.like: going outside

    If you are not sure about the answer, truthfully say you are not sure.
    
    Answer the response of human input by following the above instructions.
    
    Conversation history, {history} 
    
    Human input: {input}
    
    AI:

    """
    
    CONTRADICTORY_MEMORY_HANDLE_PROMPT ="""
    You are having a conversation with a human. You know the previous conversation history.
        
    Your Task is to review the chat history and identify any contradictory statements and resolve the contradiction.Provide a resolution by considering the most recent and relevant information, and update any associated facts to reflect this resolution. While retaining the original context,Your Goal is to create a smooth and enriching conversational experience.
    
    If needed information about timestamps you can use Database tool to retrive the information.
    
    Your Response Should based on conversation with human by impliemnting above Instructions.
    
    Here is the example of the conversation history.
    
    Contradictory information:
    
    User: Whenever I go out to my car, remind me to fill up the screenwash.
    AI: Okay, I will remind you to fill the screenwash when you go out to your car.

    User: Oh, also remind me to check the oil when I go out to the car.
    AI: Okay, I will remind you to fill your screenwash and check your oil when you go out to your car.
    
    User: I have filled my screenwash and checked my oil. Next time I go out to my car, remind me to check my tires.
    AI: I will remind you to check your tires the next time you go out to your car.

    Note: There have been three directives for reminders. The second is additive to the first, but the third one contradicts the first two because the user has performed the original tasks. If all three of these events are in the LTM, which one would be chosen? We do not want the agent to remind the user about the screenwash and oil, but only the tires. 

    Not Contradictory information:

    User: Hey, can you set up a reminder for me?
    AI: Sure, what would you like to be reminded of?

    User: I want to be reminded to leave the house at 2pm today.
    AI: Alright, I've set a reminder for you to leave the house at 2pm today. Anything else you need?

    User: Will you remind me again, when I have to leave the house at 6pm this evening?
    Ai: Absolutely, I've also set a reminder for you to leave the house at 6pm today. 
    
    Here: There are two reminders, but they are not contradictory. The first reminder is for 2pm, and the second is for 6pm. The agent should remind the user about both of these events.
    
    If you are not sure about the answer, truthfully say you are not sure.
    
    Answer the response of human input by following the above instructions.
    
    Conversation history: {history} 
    
    Human input: {input}
    
    AI:
    
    """

    
    TEMPORARY_MEMORY_HANDLE_PROMPT ="""
    You are having a conversation with a human. You know the previous conversation history.
    
    Your Task is to review the chat history and identify any temporary information and remove the temporary information from the conversation. While retaining the original context,Your Goal is to create a smooth and enriching conversational experience.
    
    If needed information about timestamps you can use Database tool to retrive the information.
    
    Your Response Should based on conversation with human by impliemnting above Instructions.
    
    Here is the example of the conversation history.
    
    Temporary Information:
    User: Remember this shopping list for me: Bread, Eggs, and Milk
    AI: I have remembered your shopping list of Bread, Eggs, and Milk

    User: I have bought some eggs.
    AI: Okay, I have removed the Eggs from your shopping list.

    User: What is my shopping list again?
    AI: On your shopping list you have: Bread and Milk

    Note: A shopping list is piece of information that is very volatile, so the agent and its memory should be reactive to additions and deletions, returning only the latest version of the shopping list when asked.

    User: When I return home from work, suggest a meal I can make for dinner.
    AI: I will remember to suggest a meal that you can make for dinner when you get in from work.

    User: I have preplanned meals this week, so for this week, don’t make any suggestions about what to make for dinner when I get home from work.
    AI: All right, for this week, I will not suggest meals for you when you return from work. 

    User: I have finished my preplanned meals, go back to suggesting meals for me.
    AI: I will resume suggesting meals for you when you return from work

    Note: We have given the agent some directive in the past, then given it a contradictory instruction with an explicit understanding that this instruction will be temporary. Have the LTM deal with this temporary change of the instructions so that the agent can achieve the temporary task, and then go back to original instructions.

    If you are not sure about the answer, truthfully say you are not sure.
    
    Answer the response of human input by following the above instructions.
    
    Conversation history: {history} 
    
    Human input: {input}
    
    AI:
    """
    
    
    EPISODIC_MEMORY_HANDLE_PROMPT ="""
   
    You are having a conversation with a human. You know the previous conversation history.
    
    Your Task is to review the chat history and identify any episodic memories and use the episodic memories to provide contextually rich and engaging interactions, facilitating a meaningful and continuous dialogue. While retaining the original context,Your Goal is to create a smooth and enriching conversational experience.
    
    If needed information about timestamps you can use Database tool to retrive the information.
    
    Your Response Should based on conversation with human by impliemnting above Instructions.
    
    If the Episodic Memory is a first time event, Assistance save the information in the memory.
    
    Here is the example of the conversation history.
    
    Episodic Memories:
    
    Two days ago:
    User: I have bought a side dresser for the bedroom, and some ingredients for dinner tonight. I am going to make omelets!
    AI: That's great, you needed a side dresser for your bed, and omelets are a healthy dinner!
    Today:
    User: I think I will prepare something for dinner tonight… Do you think I could use the ingredients I bought two days ago?
    AI: The eggs should be fine, unless you actually made and ate the omelets then!

    Yesterday:
    User: I have purchased some items for the house: A mirror, two potted plants and a standing lamp.
    AI: Okay, hope you enjoy decorating your home!

    Today:
    User: Yesterday I got home with some new items for the house. Do you remember what they were?
    AI: Sure! You bought A mirror, two potted plants and a standing lamp.


    Note: Episodic retrieval allows the agent to order its memories through time, and recall or filter them using timestamps to answer questions with a time based component. 
    
    If you are not sure about the answer, truthfully say you are not sure.
    
    Answer the response of human input by following the above instructions.
    
    Conversation history : {history} 
    
    Human input: {input}
    
    AI:
    """