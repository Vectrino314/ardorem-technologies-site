---
name: Proposal Cover
description: Blink an LED with Arduino
author: '@Athulbless'
---
<div>
<?php if (isset($_GET['ContactID'])) { ?>
<iframe id="iframe1" frameborder="0" src="https://betterproposals.io/proposal/cover.php?ProposalID=<?php echo $_GET['ProposalID'];?>&ContactID=<?php echo $_GET['ContactID'];?>"></iframe> 
<?php } else {?>
<iframe id="iframe1" frameborder="0" src="https://betterproposals.io/proposal/cover.php?ProposalID=<?php echo $_GET['ProposalID'];?>&debug=yes"></iframe> 
<?php } ?>
</div>