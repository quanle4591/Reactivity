using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

using Domain;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Activity act = await _context.Activities.FindAsync(request.Id);
                if(act != null)
                {
                    _context.Remove(act);
                }
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}