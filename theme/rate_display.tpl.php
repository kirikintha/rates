<?php
/**
 * @param string $begin_date
 * @param string $end_date
 * @param string $week_night
 * @param string $weekend_night
 * @param string $weekly_rate
 * @param string $monthly_rate
 * @param string $minimum_stay
 */
?>
<div class="property-rate" >
  <table class="property-rate-table">
    <tr>
      <td class="begin-date"><?php print $begin_date; ?></td>
      <td class="end-date"><?php print $end_date; ?></td>
      <td class="week-night"><?php print $week_night; ?></td>
      <td class="weekend-night"><?php print $weekend_night; ?></td>
      <td class="weekly"><?php print $weekly_rate; ?></td>
      <td class="monthly"><?php print $monthly_rate; ?></td>
      <td class="minimum-stay"><?php print $minimum_stay; ?></td>
    </tr>
	</table>
</div>