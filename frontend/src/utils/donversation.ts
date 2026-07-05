export function getOrCreateConversationId() {
    let conversationId = sessionStorage.getItem('conversationId');
    if (!conversationId) {
        conversationId = crypto.randomUUID();
        sessionStorage.setItem('conversationId', conversationId);
    }
    return conversationId;
}