<!DOCTYPE html>
<html lang="<?php echo $lang ?? 'en'; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($title ?? 'PHP Test'); ?></title>
</head>
<body>
    <h1>PHP Accessibility Test</h1>
    
    <?php if (isset($user)): ?>
        <!-- Missing alt -->
        <img src="<?php echo $user['avatar']; ?>">
        
        <!-- Good alt -->
        <img src="<?php echo $user['avatar']; ?>" alt="<?php echo htmlspecialchars($user['name']); ?> avatar">
    <?php endif; ?>
    
    <!-- Dynamic button without accessible name -->
    <button onclick="action('<?php echo $action; ?>')">
        <?php echo $icon; ?>
    </button>
    
    <!-- Dynamic button with accessible name -->
    <button onclick="action('<?php echo $action; ?>')" aria-label="<?php echo htmlspecialchars($actionLabel); ?>">
        <?php echo $icon; ?>
    </button>
    
    <!-- Form without labels -->
    <form method="post" action="<?php echo $formAction; ?>">
        <input type="text" name="name" placeholder="Name" value="<?php echo htmlspecialchars($name ?? ''); ?>">
        <input type="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($email ?? ''); ?>">
        <button type="submit">Submit</button>
    </form>
    
    <!-- Form with proper labels -->
    <form method="post" action="<?php echo $formAction; ?>">
        <label for="name-field">Name:</label>
        <input type="text" id="name-field" name="name" value="<?php echo htmlspecialchars($name ?? ''); ?>" required>
        
        <label for="email-field">Email:</label>
        <input type="email" id="email-field" name="email" value="<?php echo htmlspecialchars($email ?? ''); ?>" required>
        
        <button type="submit">Submit</button>
    </form>
    
    <!-- Dynamic content without proper structure -->
    <?php foreach ($items as $item): ?>
        <div>
            <span><?php echo htmlspecialchars($item['title']); ?></span>
            <p><?php echo htmlspecialchars($item['content']); ?></p>
        </div>
    <?php endforeach; ?>
    
    <!-- Dynamic content with proper structure -->
    <?php foreach ($items as $item): ?>
        <article>
            <h2><?php echo htmlspecialchars($item['title']); ?></h2>
            <p><?php echo htmlspecialchars($item['content']); ?></p>
        </article>
    <?php endforeach; ?>
</body>
</html>
