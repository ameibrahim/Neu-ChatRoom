SELECT chat_reference.combo_id, chat_reference.chat_id, chat_reference.receiver, chat_reference.sender, users.email, users.username
FROM chat_reference
INNER JOIN users ON chat_reference.receiver = users.id
WHERE sender = "xyz"