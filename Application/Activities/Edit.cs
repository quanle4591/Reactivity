using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using AutoMapper;

using Domain;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Activity act = await _context.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, act);
                // act.Title = request.Activity.Title ?? act.Title;
                // act.Description = request.Activity.Description ?? act.Description;
                // act.Category = request.Activity.Description ?? act.Category;
                // // act.Date = request.Activity.Date ?? act.Date;
                // act.City = request.Activity.City ?? act.City;
                // act.Venue = request.Activity.Venue ?? act.Venue;
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}