
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter, 
  DialogDescription 
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface CancelOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (reason: string) => void;
}

const CancelOrderDialog = ({ open, onOpenChange, onConfirm }: CancelOrderDialogProps) => {
  const [cancellationReason, setCancellationReason] = useState('');
  const [customCancellationReason, setCustomCancellationReason] = useState('');

  const handleConfirm = () => {
    const finalReason = cancellationReason === 'other' 
      ? customCancellationReason 
      : cancellationReason;
      
    onConfirm(finalReason);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Order</DialogTitle>
          <DialogDescription>
            Please tell us why you're cancelling your order.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <RadioGroup value={cancellationReason} onValueChange={setCancellationReason}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="changed_mind" id="cancel-changed-mind" />
              <Label htmlFor="cancel-changed-mind">Changed my mind</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="found_better_price" id="cancel-better-price" />
              <Label htmlFor="cancel-better-price">Found better price elsewhere</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="shipping_too_long" id="cancel-shipping" />
              <Label htmlFor="cancel-shipping">Shipping time too long</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="other" id="cancel-other" />
              <Label htmlFor="cancel-other">Other reason</Label>
            </div>
          </RadioGroup>
          
          {cancellationReason === 'other' && (
            <div className="mt-4">
              <Label htmlFor="custom-reason">Please specify your reason</Label>
              <Textarea 
                id="custom-reason" 
                value={customCancellationReason} 
                onChange={(e) => setCustomCancellationReason(e.target.value)}
                placeholder="Tell us more about why you're cancelling..."
                className="mt-2"
              />
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Never mind
          </Button>
          <Button 
            onClick={handleConfirm}
            disabled={cancellationReason === '' || (cancellationReason === 'other' && customCancellationReason === '')}
            className="bg-destructive hover:bg-destructive/90"
          >
            Cancel Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelOrderDialog;
