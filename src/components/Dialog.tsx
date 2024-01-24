import { Dialog as RadixDialog, Flex } from "@radix-ui/themes";

type DialogProps = {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmButton?: React.ReactNode;
  closeButton?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({
  trigger,
  title,
  description,
  children,
  confirmButton,
  closeButton,
  open,
  onOpenChange,
}: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Content style={{ maxWidth: 450 }}>
        <RadixDialog.Title>{title}</RadixDialog.Title>
        {description && (
          <RadixDialog.Description size="2" mb="4">
            {description}
          </RadixDialog.Description>
        )}
        {children}
        <Flex gap="3" mt="4" justify="end">
          <RadixDialog.Close>{closeButton}</RadixDialog.Close>
          <RadixDialog.Close>{confirmButton}</RadixDialog.Close>
        </Flex>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
}
