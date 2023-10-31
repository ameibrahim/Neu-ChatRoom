SELECT *
FROM messages
WHERE messages.chat_id = '$chatID'
ORDER BY messages.message_id ASC