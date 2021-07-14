export const isAllChecked = (panelRef, setSelectAllLabel, setChecked) => {
  const selectAllCheckbox = document.querySelector('#panelBlockSelectAll');
  const checkboxesContainer = panelRef.current;
  if (!checkboxesContainer) return;
  const checkboxes = checkboxesContainer.querySelectorAll('.checkbox');
  const selectedCheckboxes = checkboxesContainer.querySelectorAll(
    '.checkbox input:checked',
  );
  if (selectedCheckboxes.length > 0) {
    if (selectedCheckboxes.length === 1) {
      selectAllCheckbox.indeterminate = true;
      setSelectAllLabel(`${selectedCheckboxes.length} selected`);
    } else if (
      selectedCheckboxes.length !== 1 &&
      selectedCheckboxes.length <= checkboxes.length
    ) {
      selectAllCheckbox.indeterminate = false;
      setChecked(true);
      setSelectAllLabel(`${selectedCheckboxes.length} selected`);
    }
  } else {
    selectAllCheckbox.indeterminate = false;
    setChecked(false);
    setSelectAllLabel('Select all');
  }
};
